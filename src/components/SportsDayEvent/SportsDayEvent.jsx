import React, { useState, useEffect } from "react";
import { API } from "../constants";
import styles from "./SportsDayEvent.module.css";

const SportsDayEvent = () => {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchSportsEvents = async () => {
      setLoading(true);
      const response = await fetch(API);
      const events = await response.json();
      setEvents(events);
      setLoading(false);
    };
    fetchSportsEvents();
  }, []);

  const renderEvents = () => {
    return <div>All Events</div>;
  };
  return (
    <>
      <div className={styles.container}>
        {loading && <p>Loading ...</p>}
        {!loading && renderEvents()}
      </div>
    </>
  );
};

export default SportsDayEvent;
