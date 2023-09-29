import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion.tsx"
import {SearchClientComponent} from "@/old/api-components/SearchClientComponent.tsx";
import {RegisterComponent} from "@/old/api-components/RegisterComponent.tsx";
import {EditProspectComponent} from "@/old/api-components/EditProspectComponent.tsx";
import { ExcludeProspectComponent } from "@/old/api-components/ExcludeProspectComponent.tsx";
import {DisplayEnqueuedProspectsComponent} from "@/old/api-components/DisplayEnqueuedProspectsComponent.tsx";

export function AccordionHomePageWaiAriaPattern() {
    return (
        <>
            <Accordion type="single" collapsible className="w-full">
                <section className="component content-center">
                    {<AccordionItem value="item-1">
                        <AccordionTrigger>Cadastrar</AccordionTrigger>
                        <AccordionContent>
                            <RegisterComponent></RegisterComponent>
                        </AccordionContent>
                    </AccordionItem>}
                </section>
                <section className="component ">
                    {<AccordionItem value="item-2">
                        <AccordionTrigger>Consultar</AccordionTrigger>
                        <AccordionContent>
                            <SearchClientComponent></SearchClientComponent>
                        </AccordionContent>
                    </AccordionItem>}
                </section>
                <section className="component">
                    {<AccordionItem value="item-3">
                        <AccordionTrigger>Atualizar</AccordionTrigger>
                        <AccordionContent>
                            <EditProspectComponent></EditProspectComponent>
                        </AccordionContent>
                    </AccordionItem>}
                </section>
                <section className="component">
                    {<AccordionItem value="item-4">
                        <AccordionTrigger>Fila de atendimento</AccordionTrigger>
                        <AccordionContent>
                            <DisplayEnqueuedProspectsComponent></DisplayEnqueuedProspectsComponent>
                        </AccordionContent>
                    </AccordionItem>}
                </section>
                <section className="component">
                    {<AccordionItem value="item-5">
                        <AccordionTrigger>Deletar</AccordionTrigger>
                        <AccordionContent>
                            <ExcludeProspectComponent></ExcludeProspectComponent>
                        </AccordionContent>
                    </AccordionItem>}
                </section>
            </Accordion>
        </>
    )
}