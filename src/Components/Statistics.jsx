// Arvydo pavizdyje Stats == Statistics https://github.com/A-Kija/liutas/blob/main/src/Components/ZooStats.jsx

function ScooterStatistics() {

    return (
        <div className="scooter__statistics">
            <div className="zoo__statistics__stat">
                <span><i>Scooters Count:</i><b>{statistics.count}</b></span>
                <span><i>Scooters Ridden Km:</i><b>{statistics.riddenKm.tofixed(2)} Km</b></span>
                <span><i>Scooters Average Ridden Km:</i><b>{statistics.averageRiddenKm.toPrecision(5)} Km</b></span>
            </div>
            <div className="zoo__statistics_gstat">

            </div>
        </div>
    )
}

export default ScooterStatistics;