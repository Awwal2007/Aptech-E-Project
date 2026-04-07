import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const today = new Date().toDateString();

    const lastVisitDate = localStorage.getItem("lastVisitDate");
    let storedVisits = localStorage.getItem("visits");

    let count = storedVisits ? parseInt(storedVisits) : 0;

    if (lastVisitDate !== today) {
      count += 1;
      localStorage.setItem("visits", count.toString());
      localStorage.setItem("lastVisitDate", today);
    }

    setVisits(count);
  }, []);

  return (
    <div>
      <p><span className='counter'>{visits}</span> - Visits</p>
    </div>
  );
}