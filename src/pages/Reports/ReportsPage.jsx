import FileOutlined from '@ant-design/icons/FileOutlined';
import { Box, Button, Card, CardContent, Grid, Stack, Typography } from '@mui/material';

export default function ReportsPage() {
  return (
    <Grid container spacing={3}>
      {/* Header */}
      <Grid size={12}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Reports
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Generate and download health analytics reports
        </Typography>
      </Grid>

      {/* Coming Soon Card */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            py: 8,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)'
            }
          }}
        >
          <CardContent sx={{ textAlign: 'center' }}>
            <Stack spacing={3} sx={{ alignItems: 'center' }}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  backgroundColor: '#E3F2FD',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <FileOutlined style={{ fontSize: '2.5rem', color: '#0070C0' }} />
              </Box>
              <Stack spacing={1}>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Download Report
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Generate comprehensive health analytics reports
                </Typography>
              </Stack>
              <Button
                variant="contained"
                disabled
                sx={{
                  background: 'linear-gradient(135deg, #0070C0 0%, #4CAF50 100%)',
                  fontWeight: 600,
                  mt: 2
                }}
              >
                Coming Soon
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>

      {/* Features Preview */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Card sx={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Upcoming Features
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#0070C0' }}>
                  📊 Health Analytics Report
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  Comprehensive overview of user health metrics and trends
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#4CAF50' }}>
                  ⚠️ Risk Assessment Report
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  Detailed analysis of at-risk users and recommendations
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#FF9800' }}>
                  📈 Trend Analysis Report
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  Historical trends and predictive insights
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#F44336' }}>
                  📋 Custom Report Builder
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  Create custom reports with selected metrics and filters
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
