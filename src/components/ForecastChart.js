import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    marginB: {
        marginBottom: '1rem',
    },
}));


function createData(weekday, date, humidity, weatherCondition, windSpeed, winDirection, temperatureMin, temperatureMax, img) {
    return { weekday, date, humidity, weatherCondition, windSpeed, winDirection, temperatureMin, temperatureMax, img };
}

const data = [
    createData('Monday', '23/12/19', 6.0,
        'rainy', 4, 'SE', 6, 17),
    createData('Thursday', '24/12/19', 16.0,
        'rainy', 6, 'NE', 7,18),
    createData('Wednesday', '25/12/19', 9.0,
        'cloudly', 4, 'NE', 8, 18),
    createData('Tuesday', '26/12/19', 3.7,
        'rainy', 4, 'N', 4, 15),
    createData('Friday', '27/12/19', 16.0,
        'sunny', 3, 'SW', 4, 12),
];

function ForecastChart() {
    const classes = useStyles();

    return (
        <Card>
            <CardContent>
                <LineChart width={800} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </CardContent>
        </Card>
    );
}

export default ForecastChart;
