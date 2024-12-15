import { PathnameHeaading } from "@/Components/Heading";
import { Asidebar, Main, MainHeading } from ".";
import ComponentCard from "@/Components/ComponentCard";
import { ClassicInput, DefaultTextarea, Input, Input01, Textarea } from "@/Components/Input";

export default function(){
    return <main className="flex w-full h-full">
        <Asidebar/>
        <Main>
            <MainHeading
                pri="Input"
                sec="Displays a form input field or a component that looks like an input field."
            />

            <div className="flex flex-wrap justify-stretch gap-5">
                <ComponentCard name="Input">
                    <Input01/>
                </ComponentCard>

                <ComponentCard name="Textarea">
                    <Textarea/>
                </ComponentCard>

                <ComponentCard name="Textarea default">
                    <DefaultTextarea/>
                </ComponentCard>

                <ComponentCard name="Normal input-text">
                    <Input/>
                </ComponentCard>

                <ComponentCard name="Normal input-password">
                    <Input type='password'/>
                </ComponentCard>

                <ComponentCard name="Dynamic animate-input-text">
                    <ClassicInput/>
                </ComponentCard>

                <ComponentCard name="Dynamic animate-input-password ">
                    <ClassicInput type='password'/>
                </ComponentCard>

            </div>
        </Main>
    </main>
}