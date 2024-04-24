import Header from "@/components/Header"
import RoomCard from "@/components/RoomCard"
import New from "@/components/RoomCard/new"

export default function Rooms() {
    return (
        <div className="w-full h-full">
            <Header title="Turmas" userImg="" status={false} />
            <div className="w-[95%] h-full m-2">
                <h1 className="text-sm text-gray-500">Favoritadas</h1>
                <div className="w-full h-full">
                    <RoomCard />
                </div>
                <hr className="border-gray-300 border-1"/>
                <h1 className="text-sm text-gray-500 m-2">Outras</h1>
                <div className="flex">
                    <New />
                    <RoomCard />
                </div>
            </div>
        </div>
    )
}