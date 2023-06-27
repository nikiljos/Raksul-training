import { useEffect, useState } from "react";
import "./GroupHistory.css";
import HistoryCard from "./HistoryCard/HistoryCard";

type historyData = {
  id: number;
  name: string;
  createdAt: string;
};

type Props = {
  limit?: number;
};

function GroupHistory({ limit }: Props) {
  const [historyData, setHistoryData] = useState<Array<historyData>>([]);

  useEffect(() => {
    async function getHistory() {
      await fetch(
        `${
          process.env.REACT_APP_SERVER_URL
        }/api/group/history/${localStorage.getItem("uid")}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (limit) {
            const recentThree: Array<historyData> = [];
            data.data.forEach((e: historyData, i: number) => {
              if (i < limit) {
                recentThree.push(e);
              }
            });
            setHistoryData(recentThree);
          } else setHistoryData(data.data);
        });
    }
    getHistory();
  }, [limit]);

  return (
    <div className="group-history">
      <h1 className="history-heading">Your Previous Records</h1>
      <div className="history-cards-container">
        {historyData?.length > 0 &&
          historyData.map((item) => {
            return (
              <HistoryCard
                key={item.id}
                name={item.name}
                date={item.createdAt}
              />
            );
          })}
      </div>
    </div>
  );
}

export default GroupHistory;
