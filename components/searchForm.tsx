"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { BedDoubleIcon, CalendarIcon, User } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  location: z.string().min(2).max(50),
  dates: z.object({
    from: z.date(),
    to: z.date(),
  }),
  adults: z.string().min(1).max(12),
  children: z.string().min(0).max(12),
  rooms: z.string().min(1),
});

function SearchForm() {
  const router = useRouter();
  const [date, setDate] = useState<Date | undefined>(undefined);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      dates: {
        from: undefined,
        to: undefined,
      },
      adults: "1",
      children: "0",
      rooms: "1",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission
    console.log(values);
    const checkin_monthday = values.dates.from.getDate().toString();
    const checkin_month = (values.dates.from.getMonth() + 1).toString();
    const checkin_year = values.dates.from.getFullYear().toString();
    const checkout_monthday = values.dates.to.getDate().toString();
    const checkout_month = (values.dates.to.getMonth() + 1).toString();
    const checkout_year = values.dates.to.getFullYear().toString();

    const checkin = `${checkin_year}-${checkin_month}-${checkin_monthday}`;
    const checkout = `${checkout_year}-${checkout_month}-${checkout_monthday}`;

    const url = new URL("https://www.booking.com/searchresults.html")
    url.searchParams.set("ss",values.location)
    url.searchParams.set("group_adults",values.adults)
    url.searchParams.set("group_children",values.children)
    url.searchParams.set("no_rooms",values.rooms)
    url.searchParams.set("checkin",checkin)
    url.searchParams.set("checkout",checkout)

    router.push(`/search?url=${url.href}`)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row lg:max-w-6xl lg:mx-auto items-center justify-center space-x-0 lg:space-x-2 space-y-4 lg:space-y-0 rounded-3xl bg-[#52796f]/50 backdrop-blur-sm p-6 transition-all duration-300"
      >
        <div className="grid w-full lg:max-w-sm items-center">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#2f3e46] flex ">
                  Location
                  {/* <BedDoubleIcon className="ml-2 h-4 w-4 text-[#2f3e46]" /> */}
                </FormLabel>
                
                <FormControl>
                  <Input
                    placeholder="London, UK"
                    {...field}
                    className="placeholder-[#2f3e46]/70 bg-[#cad2c5]/80 focus:bg-[#cad2c5] focus-visible:ring-[#2f3e46] transition-colors duration-200 rounded-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="grid w-full flex-1 lg:max-w-sm items-center">
          <FormField
            control={form.control}
            name="dates"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-[#2f3e46]">Dates</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className="w-full lg:w-[300px] justify-start text-left font-normal bg-[#cad2c5]/80 hover:bg-[#cad2c5] transition-colors duration-200 rounded-lg"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value?.from ? (
                          field.value.to ? (
                            <>
                              {format(field.value.from, "LLL dd, y")} -{" "}
                              {format(field.value.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(field.value.from, "LLL dd, y")
                          )
                        ) : (
                          <span className="font-light text-[#2f3e46]">
                            Pick a date
                          </span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      selected={{
                        from: field.value?.from,
                        to: field.value?.to,
                      }}
                      onSelect={field.onChange}
                      numberOfMonths={2}
                      disabled={(date) =>
                        date < new Date(new Date().setHours(0, 0, 0, 0))
                      }
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="flex w-full items-center space-x-2">
          <div className="grid items-center flex-1">
            <FormField
              control={form.control}
              name="adults"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-[#2f3e46]">Adults</FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Adults"
                      min="1"
                      max="12"
                      {...field}
                      className="bg-[#cad2c5]/80 hover:bg-[#cad2c5] focus:bg-[#cad2c5] transition-colors duration-200 rounded-lg"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="grid items-center flex-1">
            <FormField
              control={form.control}
              name="children"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-[#2f3e46]">Children</FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Children"
                      min="0"
                      max="12"
                      {...field}
                      className="bg-[#cad2c5]/80 hover:bg-[#cad2c5] focus:bg-[#cad2c5] transition-colors duration-200 rounded-lg"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="grid items-center flex-1">
            <FormField
              control={form.control}
              name="rooms"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-[#2f3e46]">Rooms</FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Rooms"
                      min="1"
                      max="12"
                      {...field}
                      className="bg-[#cad2c5]/80 hover:bg-[#cad2c5] focus:bg-[#cad2c5] transition-colors duration-200 rounded-lg"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="mt-auto">
            <Button 
              type="submit" 
              className="bg-[#2f3e46] text-base hover:bg-[#2f3e46]/90 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg rounded-lg"
            >
              Search
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default SearchForm;