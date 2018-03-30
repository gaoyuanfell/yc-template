import {
  Compiler, Component, ComponentFactory, Injectable, Input, ModuleWithProviders, NgModule, OnDestroy, Type,
  ViewContainerRef
} from '@angular/core';
import {ShareModule} from '../app/share/share.module';
import {NgModuleRef} from '@angular/core/src/linker/ng_module_factory';
import {Injector} from '@angular/core/src/di/injector';

export interface CompileOptions {
  template: string;
  imports?: Array<Type<any> | ModuleWithProviders | any[]>;
  module?: NgModule;
  viewContainerRef?: ViewContainerRef;
  index?: number;
  injector?: Injector;
  projectableNodes?: any[][];
  ngModule?: NgModuleRef<any>;
}

export interface TemplateDynamicComponent {
  /**
   * 舞台样式
   */
  stageStyle;
  /**
   * 元素样式
   */
  eleStyle;
}

@Injectable()
export class CompilerUtil {
  constructor(private compiler: Compiler) {

  }

  private cacheFactories: any = {};

  destroy() {
    this.cacheFactories = {};
  }

  async compile(ops: CompileOptions) {
    const viewContainerRef = ops.viewContainerRef;
    const factory = await this.createFactory(ops);
    if (viewContainerRef) {
      const componentRef = viewContainerRef.createComponent(factory, ops.index, ops.injector, ops.projectableNodes, ops.ngModule);
      return {
        factory: factory,
        componentRef: componentRef
      };
    }
    return {factory: factory, componentRef: null};
  }

  async createFactory(ops: CompileOptions) {
    const template = ops.template;
    let factory: ComponentFactory<TemplateDynamicComponent> = this.cacheFactories[template];
    if (factory) {
      return factory;
    }

    @Component({
      selector: 'dynamic-component',
      template: template,
    })
    class DynamicComponent implements TemplateDynamicComponent {
      @Input() stageStyle;
      @Input() eleStyle;
    }

    @NgModule({
      imports: [
        ShareModule
      ],
      declarations: [
        DynamicComponent
      ]
    })
    class RuntimeComponentModule {
    }

    const component = await this.compiler.compileModuleAndAllComponentsAsync(RuntimeComponentModule);
    factory = component.componentFactories.find(com => com.componentType === DynamicComponent);
    this.cacheFactories[template] = factory;
    return factory;
  }
}
