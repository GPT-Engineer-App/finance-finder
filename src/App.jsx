import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import "./App.css";

function App() {
  const [stockData, setStockData] = useState(null);

  const handleFetchStockData = async () => {
    // Placeholder function to simulate fetching stock data
    // You would replace this with your yfinance API call
    setStockData({
      symbol: "AAPL",
      price: "150.00",
      change: "+1.50 (1.00%)",
    });
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Stock Information</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={handleFetchStockData}>Fetch AAPL Stock Data</Button>
          {stockData && (
            <div className="mt-4">
              <p>Symbol: {stockData.symbol}</p>
              <p>Price: {stockData.price}</p>
              <p>Change: {stockData.change}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}

export default App;
