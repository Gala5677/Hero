
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const schedule = [
  {
    day: "Monday",
    tasks: [
      {
        time: "5:30–6:00 PM",
        label: "R: Quant Modeling",
        steps: ["Practice ARIMA/GARCH on stock data", "Visualize with ggplot2"]
      },
      {
        time: "7:00–8:00 PM",
        label: "Python/SQL",
        steps: ["Pandas + NumPy exercises", "Run 2 SQL queries"]
      }
    ]
  },
  {
    day: "Tuesday (Odd Weeks)",
    tasks: [
      {
        time: "5:30–6:00 PM",
        label: "Finance Reading",
        steps: ["Read ML for Asset Managers", "Note 1 idea"]
      },
      {
        time: "6:00–7:00 PM",
        label: "Class Lecture",
        steps: ["Attend class, 3 key takeaways"]
      },
      {
        time: "7:00–8:00 PM",
        label: "Project Work",
        steps: ["Update GitHub or portfolio"]
      }
    ]
  },
  {
    day: "Wednesday",
    tasks: [
      {
        time: "5:30–6:00 PM",
        label: "Quiz",
        steps: ["Complete weekly quiz"]
      },
      {
        time: "7:00–8:00 PM",
        label: "ML Practice",
        steps: ["Use XGBoost or caret", "Log results"]
      }
    ]
  },
  {
    day: "Thursday (Even Weeks)",
    tasks: [
      {
        time: "5:30–6:00 PM",
        label: "Project Work",
        steps: ["Write 1 script"]
      },
      {
        time: "6:00–7:00 PM",
        label: "Class Lecture",
        steps: ["Attend and save slides"]
      },
      {
        time: "7:00–8:00 PM",
        label: "Resume & GitHub",
        steps: ["Update resume", "Commit changes"]
      }
    ]
  },
  {
    day: "Friday",
    tasks: [
      {
        time: "5:30–6:30 PM",
        label: "Quiz",
        steps: ["Complete weekly quiz"]
      },
      {
        time: "6:30–8:00 PM",
        label: "Rest or Lecture",
        steps: ["Watch 1 talk", "Take 2 notes"]
      }
    ]
  }
];

export default function QuantScheduleDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Quant Career Weekly Schedule</h1>
      <Tabs defaultValue="Monday" className="w-full">
        <TabsList>
          {schedule.map((day, index) => (
            <TabsTrigger key={index} value={day.day}>{day.day}</TabsTrigger>
          ))}
        </TabsList>
        {schedule.map((day, index) => (
          <TabsContent key={index} value={day.day}>
            {day.tasks.map((task, taskIndex) => (
              <Card key={taskIndex} className="my-4">
                <CardContent className="p-4">
                  <h2 className="font-semibold">{task.time} – {task.label}</h2>
                  <ul className="list-disc ml-6 mt-2">
                    {task.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-center gap-2">
                        <Checkbox id={`check-${index}-${taskIndex}-${stepIndex}`} />
                        <label htmlFor={`check-${index}-${taskIndex}-${stepIndex}`}>{step}</label>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
