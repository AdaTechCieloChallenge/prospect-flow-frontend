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

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";

export function SearchClientComponent() {
  return (
      <Tabs defaultValue="pf" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="pf">Pessoa Física</TabsTrigger>
          <TabsTrigger value="pj">Pessoa Jurídica</TabsTrigger>
        </TabsList>
        <TabsContent value="pf">
          <Card>
            <CardHeader>
              <CardTitle>Pessoa Física</CardTitle>
              <CardDescription>
                Consultar.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="cpf">CPF</Label>
                <Input id="cpf" defaultValue="Insira apenas números" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Consultar</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="pj">
          <Card>
            <CardHeader>
              <CardTitle>Pessoa Jurídica</CardTitle>
              <CardDescription>
                Consultar.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="cnpj">CNPJ</Label>
                <Input id="cnpj" defaultValue="Insira apenas números" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Consultar</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
  );
}
