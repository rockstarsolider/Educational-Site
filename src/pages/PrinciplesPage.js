import { Calendar } from "../components/ui/calendar";
import { useState } from "react";
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "../components/ui/select";
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious,} from "../components/ui/carousel"  

function PrinciplesPage() {
    const [date, setDate] = useState(Date | undefined)

    return (
    <div className="gap-10">
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
        />
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
            </SelectContent>
        </Select>
    </div>
    )
}

export default PrinciplesPage;
