import React from "react";
import PropTypes from "prop-types";
import { Box, IconButton, Toolbar, Typography, Container, Grid, Paper, Card, CardContent, CardActions, Button } from "@mui/material";
import { Menu } from "@mui/icons-material";

export const Machines = (props) => {
    return (
        <>
            <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }}>
                <IconButton>
                    <Menu />
                </IconButton>
            </Toolbar>
            <Box sx={{ display: 'flex' }}>
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={3} md={3} lg={3}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                                    生产线体：DEV
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                    DEV001
                                    </Typography>
                                    <Typography sx={{ fontSize: 12, mb: 1.5 }} color="text.secondary">
                                    本设备适用于通用产品性能测试.
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontSize: 12 }}>
                                    {"#1 - 127.0.0.1:50001"}
                                    <br />
                                    {"#2 - 127.0.0.1:50002"}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Setting</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={3} md={3} lg={3}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 180 }}>
                            </Paper>
                        </Grid>
                        <Grid item xs={3} md={3} lg={3}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 180 }}>
                            </Paper>
                        </Grid>
                        <Grid item xs={3} md={3} lg={3}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 180 }}>
                            </Paper>
                        </Grid>
                        <Grid item xs={3} md={3} lg={3}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 180 }}>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

