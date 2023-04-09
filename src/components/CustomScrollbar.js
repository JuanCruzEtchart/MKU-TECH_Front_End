import { Scrollbars } from "react-custom-scrollbars";

export default function CustomScrollbar({ children }) {
  return (
    <Scrollbars
      renderThumbVertical={({ style, ...props }) => (
        <div
          {...props}
          className="bg-gray-300 dark:bg-gray-700 rounded-lg"
          style={{ ...style, width: "8px", background: "rgba(255, 0, 0, 0.3)" }}
        />
      )}
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      {children}
    </Scrollbars>
  );
}
