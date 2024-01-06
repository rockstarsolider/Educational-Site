import { Calendar } from "../components/ui/calendar";
import { useState } from "react";
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "../components/ui/select";
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious,} from "../components/ui/carousel"  

function PrinciplesPage() {
    const [date, setDate] = useState(Date | undefined)

    return (
    
        
        <Carousel opts={{align: "start",}} className="w-full max-w-sm">
            <CarouselContent>
                <CarouselItem className='w-1/4 h-10'>
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
                </CarouselItem>
                <CarouselItem className='w-1/4 h-10'>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                    />
                </CarouselItem>
                <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default PrinciplesPage;
