import type { Meta, StoryObj } from "@storybook/react";
import { Home, Settings, Users, Mail, Calendar } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "./sidebar";

const meta: Meta = {
  title: "Components/Sidebar",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <SidebarProvider>
        <div className="flex min-h-[400px] w-full">
          <Story />
        </div>
      </SidebarProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj;

const menuItems = [
  { title: "Home", icon: Home },
  { title: "Users", icon: Users },
  { title: "Mail", icon: Mail },
  { title: "Calendar", icon: Calendar },
  { title: "Settings", icon: Settings },
];

export const Default: Story = {
  render: () => (
    <>
      <Sidebar>
        <SidebarHeader>
          <span className="px-2 text-sm font-semibold">Atelier</span>
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <span className="px-2 text-xs text-muted-foreground">v1.0.0</span>
        </SidebarFooter>
      </Sidebar>
      <main className="flex-1 p-6">
        <SidebarTrigger />
        <p className="mt-4 text-sm text-muted-foreground">Main content area. Press the trigger or Ctrl+B to toggle.</p>
      </main>
    </>
  ),
};

export const WithActiveItem: Story = {
  render: () => (
    <>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item, i) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton isActive={i === 0}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <main className="flex-1 p-6">
        <SidebarTrigger />
      </main>
    </>
  ),
};

export const CollapsibleIcon: Story = {
  render: () => (
    <>
      <Sidebar collapsible="icon">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton tooltip={item.title}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <main className="flex-1 p-6">
        <SidebarTrigger />
        <p className="mt-4 text-sm text-muted-foreground">Collapses to icon-only mode.</p>
      </main>
    </>
  ),
};
