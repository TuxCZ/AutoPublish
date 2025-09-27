import { Chart, Series, CommonSeriesSettings, Label, Format } from 'devextreme-react/chart';
import { useDashboardContext } from "../../hooks/useDashboardContext";

export const StatisticsCard = () => {
    const { statistics } = useDashboardContext();
    let { publishStatistics, publishDuration } = statistics;

    publishStatistics = [
        { day: '20.09.2025', total: 20, success: 18, failed: 2 },
        { day: '21.09.2025', total: 18, success: 10, failed: 8 },
        { day: '22.09.2025', total: 10, success: 10, failed: 0 },
        { day: '23.09.2025', total: 1, success: 0, failed: 1 },
        { day: '24.09.2025', total: 24, success: 20, failed: 4 }
    ];

    publishDuration = [
        { name: "Minimální", valueInSeconds: 30 },
        { name: "Průměr", valueInSeconds: 1800 },
        { name: "Maximální", valueInSeconds: 20000 },
    ];

    return (
        <>
            <div className="p-3 border rounded shadow text-white border-dark">
                <Chart
                    id="publish-chart"
                    title="Historie publishů"
                    dataSource={publishStatistics}
                >
                    <CommonSeriesSettings argumentField="day" type="bar" hoverMode="allArgumentPoints" selectionMode="allArgumentPoints">
                        <Label visible={true}>
                            <Format type="fixedPoint" precision={0} />
                        </Label>
                    </CommonSeriesSettings>

                    <Series argumentField="day" valueField="total" name="Celkem" color="#3767A6" />
                    <Series argumentField="day" valueField="success" name="Úspěšných" color="#009E60" />
                    <Series argumentField="day" valueField="failed" name="Neúspěšných" color="#D22B2B" />
                </Chart>
            </div>

            <div className="p-3 border rounded shadow text-white border-dark mt-2">
                <Chart
                    id="duration-chart"
                    title="Trvání publishů"
                    dataSource={publishDuration}
                >
                    <CommonSeriesSettings argumentField="name" type="steparea" />

                    <Series argumentField="name" valueField="valueInSeconds" name="Trvání (s)" />
                </Chart>
            </div>
        </>
    );
}
