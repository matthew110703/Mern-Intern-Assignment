const TimelineCard = ({title, institute, from, to, description}) => {
    return (
        <div className="flex flex-col gap-2">
            <header className="flex justify-between items-baseline">
                <h1 className="text-xl font-semibold">{title}</h1>
                <p className="text-sm font-semibold text-gray-500">{from} - {to}</p>
            </header>

            <h4 className="text-base font-semibold text-gray-500">{institute}</h4>
            <p className="text-sm">{description}</p>
        </div>
    )
}

export default TimelineCard;