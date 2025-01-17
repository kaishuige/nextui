const App = `import {DateRangePicker} from "@nextui-org/react";

export default function App() {
  return (
    <div className="w-full max-w-xl flex flex-row gap-4">
      <DateRangePicker
        label="Birth Date"
        variant="bordered"
        showMonthAndYearPickers
      />
    </div>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
