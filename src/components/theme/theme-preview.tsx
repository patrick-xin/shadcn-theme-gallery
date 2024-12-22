// components/theme/theme-preview.tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AreaChartStacked from "../charts/chart-area-stacked";
import BarChartMultiple from "../charts/chart-bar-multiple";
import { CardDemo } from "../showcases/card-demo";
import { ProgressDemo } from "../showcases/progress-demo";
import { MenubarDemo } from "../showcases/menu-bar-demo";
import { CheckboxDemo } from "../showcases/check-box-demo";
import { DatePickerDemo } from "../showcases/date-picker-demo";
import { CommandDemo } from "../showcases/command-demo";
import { DrawerDemo } from "../showcases/drawer-demo";

function ThemePreview() {
  return (
    <Tabs defaultValue="components" className="space-y-4">
      <TabsList>
        <TabsTrigger value="components">Components</TabsTrigger>
        <TabsTrigger value="charts">Charts</TabsTrigger>
      </TabsList>
      <TabsContent value="components" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Submit</Button>
            </CardFooter>
          </Card>

          <CardDemo />
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Buttons</h4>
            <div className="grid grid-cols-2 gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Input Fields</h4>
              <div className="grid gap-4">
                <Input placeholder="Default input" />
                <Input placeholder="Disabled input" disabled />
                <CheckboxDemo />
                <ProgressDemo />
                <MenubarDemo />
                <DatePickerDemo />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CommandDemo />
          <DrawerDemo />
        </div>
      </TabsContent>

      <TabsContent value="charts">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
          <AreaChartStacked />
          <BarChartMultiple />
        </div>
      </TabsContent>
    </Tabs>
  );
}
export default ThemePreview;
