import { fetchResults } from "@/lib/fetchResults";
import { notFound } from "next/navigation";

type Props = {
  searchParams: SearchParams;
}

export type SearchParams = {
  url:URL;
  group_adults:string;
  group_children:string;
  ss: string;
  no_rooms:string;
  checkin: string;
  checkout: string;
}

 async function page({searchParams}:Props) {
  if(!searchParams.url) return notFound()
  const results = await fetchResults(searchParams)

  // if(!results) return <div>No results...</div>
  return (
    <div>
      SearchPage
      
    </div>
  )
}

export default page
