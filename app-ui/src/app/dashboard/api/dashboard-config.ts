class LayoutConfig {
}

class WidgetLayoutConfig {
}

class WidgetConfig {
  layout : WidgetLayoutConfig;
}

class ContainerConfig extends WidgetConfig{
  layout : LayoutConfig;
  widgets : WidgetConfig [];
}

export class DashboardConfig extends ContainerConfig{
  constructor(public name: string) {
    super();
  }

}
