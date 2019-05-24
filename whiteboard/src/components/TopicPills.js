import React from 'react';

const TopicPills = ({topics, selectTopic}) =>
        <ul className="nav nav-pills">
            { topics.map((topic, index) =>
                <li key={index} className="nav-item" onClick={() => selectTopic(topic)}>
                    <a className="nav-link">
                        {topic.title}
                    </a>
                </li>
            )}
        </ul>;

export default TopicPills;