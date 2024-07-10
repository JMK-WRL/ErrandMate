import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const ErrandItem = ({ errand }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    {errand.task}
                </Typography>
                <Typography color="textSecondary">
                    {errand.description}
                </Typography>
                <Typography color="textSecondary">
                    Location: {errand.location}
                </Typography>
                <Typography color="textSecondary">
                    Deadline: {new Date(errand.deadline).toLocaleDateString()}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ErrandItem;
