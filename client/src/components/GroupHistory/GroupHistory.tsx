import "./GroupHistory.css";
import HistoryCard from "./HistoryCard/HistoryCard";
import { useAppSelector } from "../../hooks";
import { useQuery } from "@tanstack/react-query";

type HistoryData = {
  id: number;
  name: string;
  createdAt: string;
  invite_code: string;
};

type Props = {
  limit?: number;
};

function GroupHistory({ limit }: Props) {
  const auth = useAppSelector((state) => state.auth);
  const {
    isLoading,
    error,
    data: historyData,
  } = useQuery({
    queryKey: ["history", auth, limit],
    queryFn: () =>
      auth.user.id
        ? fetch(
            `${process.env.REACT_APP_SERVER_URL}/api/group/history/${auth.user.id}`
          )
            .then((res) => res.json())
            .then(
              (data) =>
                data.data &&
                (data.data?.slice(0, limit || 100) as HistoryData[])
            )
        : [],
  });

  return (
    <div className="group-history">
      <h1 className="history-heading">Your Previous Records</h1>
      <div>
        {isLoading ? (
          <h3>Loading</h3>
        ) : error ? (
          <div>
            <h3>Error</h3>
            <div>{error.toString()}</div>
          </div>
        ) : (
          <div className="history-cards-container">
            {historyData?.length > 0 ? (
              historyData.map((item: HistoryData) => {
                return (
                  <HistoryCard
                    key={item.id}
                    invite_code={item.invite_code}
                    id={item.id}
                    name={item.name}
                    date={item.createdAt}
                  />
                );
              })
            ) : (
              <h3>No Groups found</h3>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default GroupHistory;
