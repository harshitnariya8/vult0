import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';

const ROICalculator = () => {
  const [callsPerWeek, setCallsPerWeek] = useState(10);
  const [conversionRate, setConversionRate] = useState(25);
  const [avgCaseValue, setAvgCaseValue] = useState(100000);
  const [results, setResults] = useState({
    missedCalls: 0,
    lostRevenue: 0,
    annualLoss: 0,
    recoveredCases: 0
  });

  useEffect(() => {
    calculateROI();
  }, [callsPerWeek, conversionRate, avgCaseValue]);

  const calculateROI = () => {
    // Assuming 34% of calls are missed (industry stat)
    const missedCallsPerWeek = Math.round(callsPerWeek * 0.34);
    const missedCallsPerMonth = missedCallsPerWeek * 4;
    
    // Calculate potential conversions from missed calls
    const potentialConversions = missedCallsPerMonth * (conversionRate / 100);
    
    // Calculate lost revenue
    const monthlyLoss = Math.round(potentialConversions * avgCaseValue);
    const annualLoss = monthlyLoss * 12;
    
    // With AI receptionist (87% reduction in missed calls)
    const recoveredCalls = Math.round(missedCallsPerMonth * 0.87);
    const recoveredCases = Math.round(recoveredCalls * (conversionRate / 100));

    setResults({
      missedCalls: missedCallsPerMonth,
      lostRevenue: monthlyLoss,
      annualLoss: annualLoss,
      recoveredCases: recoveredCases
    });
  };

  const formatCurrency = (value) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)}Cr`;
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(2)}L`;
    }
    return `₹${value.toLocaleString('en-IN')}`;
  };

  return (
    <div className="roi-calculator-section">
      <div className="container">
        <div className="roi-header">
          <Calculator className="roi-icon" size={40} />
          <h2 className="heading-1">Let's do the math.</h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            See exactly how much revenue you're losing to missed calls
          </p>
        </div>

        <div className="roi-calculator-grid">
          {/* Input Section */}
          <div className="roi-inputs-card">
            <div className="input-group">
              <label htmlFor="calls" className="input-label">
                Total calls per week
              </label>
              <input
                id="calls"
                type="range"
                min="5"
                max="100"
                value={callsPerWeek}
                onChange={(e) => setCallsPerWeek(Number(e.target.value))}
                className="range-input"
              />
              <span className="input-value">{callsPerWeek} calls</span>
            </div>

            <div className="input-group">
              <label htmlFor="conversion" className="input-label">
                Your conversion rate
              </label>
              <input
                id="conversion"
                type="range"
                min="5"
                max="50"
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="range-input"
              />
              <span className="input-value">{conversionRate}%</span>
            </div>

            <div className="input-group">
              <label htmlFor="caseValue" className="input-label">
                Average case value
              </label>
              <input
                id="caseValue"
                type="range"
                min="25000"
                max="500000"
                step="25000"
                value={avgCaseValue}
                onChange={(e) => setAvgCaseValue(Number(e.target.value))}
                className="range-input"
              />
              <span className="input-value">{formatCurrency(avgCaseValue)}</span>
            </div>
          </div>

          {/* Results Section */}
          <div className="roi-results-card">
            <div className="roi-alert">
              <TrendingUp size={24} />
              <h3 className="heading-3">Your Current Reality</h3>
            </div>

            <div className="roi-metric-grid">
              <div className="roi-metric">
                <div className="roi-metric-value">{results.missedCalls}</div>
                <div className="roi-metric-label">Missed calls/month</div>
              </div>

              <div className="roi-metric highlight">
                <div className="roi-metric-value">{formatCurrency(results.lostRevenue)}</div>
                <div className="roi-metric-label">Lost revenue/month</div>
              </div>

              <div className="roi-metric">
                <div className="roi-metric-value">{formatCurrency(results.annualLoss)}</div>
                <div className="roi-metric-label">Annual loss</div>
              </div>

              <div className="roi-metric success">
                <div className="roi-metric-value">+{results.recoveredCases}</div>
                <div className="roi-metric-label">Cases you could win back</div>
              </div>
            </div>

            <div className="roi-footer">
              <p className="body-medium" style={{ fontWeight: '500' }}>
                And that's just the calls you know about.
              </p>
            </div>
          </div>
        </div>

        <div className="roi-cta">
          <button className="btn-primary btn-large">
            Recover This Revenue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
