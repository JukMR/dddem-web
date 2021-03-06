import Perfume from 'perfume.js';

const metricNames = [
  'fp',
  'fcp',
  'lcp',
  'lcpFinal',
  'fid',
  'cls',
  'clsFinal',
  'tbt',
  'tbt10S',
  'tbtFinal',
];
const perfume = new Perfume({
  analyticsTracker: ({ metricName, data, navigatorInformation }) => {
    if (metricNames.includes(metricName)) {
      ga('send', 'event', {
        eventCategory: 'Perfume.js',
        eventAction: metricName,
        // Google Analytics metrics must be integers, so the value is rounded
        eventValue: metricName === 'cls' ? data * 1000 : data,
        eventLabel: navigatorInformation.isLowEndExperience
          ? 'lowEndExperience'
          : 'highEndExperience',
        // Use a non-interaction event to avoid affecting bounce rate
        nonInteraction: true,
      });
    }
  },
});

const PerformanceAnalytics = (props) => <span></span>;

export default PerformanceAnalytics;
