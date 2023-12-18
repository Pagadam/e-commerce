import Gallery from "@/app/components/Gallery";

type Props = {
    params: {
        term: string
    }
}

export function generateMetadata({params: {term}}: Props){
    return {
        title: `Results for ${term}`
    }
}

export default function SearchMetadata({params: {term}}: Props){
    return <Gallery topic={term} />

}