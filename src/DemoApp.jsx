import React from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';

export const DemoApp = () => {
  return (
    <div className="demo-app">
      <div className="demo-app-main">
        {/* Column headers broken, but resource title shown */}
        <FullCalendar
          plugins={[resourceTimelinePlugin]}
          initialView="resourceTimeline"
          // Removing the following line fixes it
          resourceAreaHeaderContent="Resource Area Header"
          resources={[
            { num: '22', name: 'John' },
            { num: '66', name: 'Glen' },
            { num: '32', name: 'Joan' },
            { num: '55', name: 'Matt' },
          ]}
          resourceAreaColumns={[
            { field: 'num', headerContent: () => 'Number' },
            { field: 'name', headerContent: 'Name' },
          ]}
        />
        {/* Column headers work, but no resource title */}
        <FullCalendar
          plugins={[resourceTimelinePlugin]}
          initialView="resourceTimeline"
          resources={[
            { num: '22', name: 'John' },
            { num: '66', name: 'Glen' },
            { num: '32', name: 'Joan' },
            { num: '55', name: 'Matt' },
          ]}
          resourceAreaColumns={[
            { field: 'num', headerContent: () => 'Number' },
            { field: 'name', headerContent: 'Name' },
          ]}
        />
      </div>
    </div>
  );
};
