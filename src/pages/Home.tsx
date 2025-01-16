import Grid from '@mui/material/Grid2';
import {  ResponsiveAppBar } from "../components/ResponsiveAppBar";
import { Box } from '@mui/material';

export function Home() {
    return (
        <>
        <ResponsiveAppBar />
        <Grid container spacing={0} sx={{ height: '100vh' }}>
            <Grid size={3}>
                <Box sx={{ height: '50%' }} bgcolor={'yellow'}>
                    Melhores da semana
                </Box>
                <Box sx={{ height: '50%' }} bgcolor={'red'}>
                    Torneios ativos
                </Box>
            </Grid>
            <Grid size={6} bgcolor={'blue'}>
                <Box>
                    news / paths
                </Box>
            </Grid>
            <Grid size={3}>
                <Box  sx={{ height: '50%' }} bgcolor={'green'}>
                    leagues
                </Box>
                <Box sx={{ height: '50%' }} bgcolor={'purple'}>
                    ranking liga princial
                </Box>
            </Grid>
        </Grid>
        </>
    )
}