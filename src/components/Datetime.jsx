import React from 'react';
import ReactDom from 'react-dom';

import './Datetime.scss';

class Datetime extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            months: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
            ],
            days: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
            ],
            hour: () => {
                let hour = this.state.date.getHours();
                if(hour > 12) hour -= 12;
                return hour;
            },
            minutes: () => {
                let minutes = this.state.date.getMinutes();
                if(minutes < 10) minutes = `0${minutes}`;
                return minutes;
            },
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.updateTime(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    updateTime() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
            <div className="datetime">
                <p className="date">
                    {this.state.days[this.state.date.getDay()]},&nbsp;
                    {this.state.months[this.state.date.getMonth()]}&nbsp;
                    {this.state.date.getDate()},&nbsp;
                    {this.state.date.getFullYear()}
                </p>
                <p className="time">
                    {this.state.hour()}:
                    {this.state.minutes()}
                    {this.state.date.getHours() >= 12 ? ' p.m.' : ' a.m.'}
                </p>
            </div>
        );
    }
}

export default Datetime;
