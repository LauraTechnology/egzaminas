// Arvydo pavizdyje Stats == Statistics https://github.com/A-Kija/liutas/blob/main/src/Components/ZooStats.jsx

function Statistics({statistics, groupStatistics}) {
  return (
    <div className="statistics">
      <div className="statistics__stat">
        <span>
          <i> Count:</i>
          <b>{statistics.count}</b>
        </span>
        <span>
          <i> Ridden Km:</i>
          <b>{statistics.riddenKm.tofixed(2)} Km</b>
        </span>
        <span>
          <i> Average Ridden Km:</i>
          <b>{statistics.averageRiddenKm.toPrecision(5)} Km</b>
        </span>
      </div>
      <div className="zoo__statistics_gstat">
        {groupStatistics.map((s) => (
          <span key={s.type}>
            <i>{s.type}</i> <b>{s.count}</b>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Statistics;
