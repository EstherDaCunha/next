import Header from "@/components/Header"

export default function Rooms(){
    return(
        <div>
            <Header title="Turmas" userImg="" status={false}/>
            <div className="w-full h-10">
                <h1 className="text-sm text-gray-500">Favoritadas</h1>
            </div>
        </div>
    )
}