import { Grid, Typography } from '@mui/material';
import GaugeCard from 'components/GaugeCard';
import RecentTable from 'components/RecentTable';
import RiskChart from 'components/RiskChart';
import SummaryCard from 'components/SummaryCard';
import { useUsers } from 'hooks/useUsers';
import { useMemo } from 'react';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

export default function DashboardDefault() {
  const { users } = useUsers();

  // Calculate analytics from user data
  const analytics = useMemo(() => {
    if (users.length === 0) {
      return {
        totalUsers: 0,
        avgHealthScore: 0,
        avgLifestyleScore: 0,
        avgVitalsScore: 0,
        avgActivityScore: 0,
        highRiskUsers: 0,
        riskData: [],
        recentUsers: []
      };
    }

    const totalUsers = users.length;
    const avgHealthScore = (users.reduce((sum, u) => sum + u.health_score, 0) / totalUsers).toFixed(1);
    const avgLifestyleScore = (users.reduce((sum, u) => sum + u.lifestyle_score, 0) / totalUsers).toFixed(1);
    const avgVitalsScore = (users.reduce((sum, u) => sum + u.vitals_score, 0) / totalUsers).toFixed(1);
    const avgActivityScore = (users.reduce((sum, u) => sum + u.activity_score, 0) / totalUsers).toFixed(1);
    const highRiskUsers = users.filter((u) => ['Fair', 'Poor'].includes(u.risk_label)).length;

    // Risk distribution
    const riskCounts = users.reduce((acc, u) => {
      const label = u.risk_label;
      acc[label] = (acc[label] || 0) + 1;
      return acc;
    }, {});

    const riskData = Object.entries(riskCounts).map(([name, value]) => ({ name, value }));

    // Recent updates (last 5 users sorted by date)
    const recentUsers = [...users].sort((a, b) => new Date(b.last_updated) - new Date(a.last_updated)).slice(0, 5);

    return {
      totalUsers,
      avgHealthScore,
      avgLifestyleScore,
      avgVitalsScore,
      avgActivityScore,
      highRiskUsers,
      riskData,
      recentUsers
    };
  }, [users]);

  const tableColumns = [
    { key: 'full_name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'city', label: 'City' },
    { key: 'health_score', label: 'Health Score' },
    { key: 'risk_label', label: 'Risk Label' },
    { key: 'last_updated', label: 'Last Updated' }
  ];

  return (
    <Grid container rowSpacing={3} columnSpacing={2.75}>
      {/* Header */}
      <Grid size={12} sx={{ mb: 1 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Dashboard
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Health Score Analytics Overview
        </Typography>
      </Grid>

      {/* Summary Cards */}
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <SummaryCard title="Total Users" value={analytics.totalUsers} />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <SummaryCard title="Avg Health Score" value={analytics.avgHealthScore} />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <SummaryCard title="High Risk Users" value={analytics.highRiskUsers} />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <SummaryCard title="Fair + Poor" value={`${analytics.highRiskUsers}/${analytics.totalUsers}`} />
      </Grid>

      {/* Gauges */}
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <GaugeCard title="Avg Lifestyle Score" value={analytics.avgLifestyleScore} maxValue={100} />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <GaugeCard title="Avg Vitals Score" value={analytics.avgVitalsScore} maxValue={100} />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <GaugeCard title="Avg Activity Score" value={analytics.avgActivityScore} maxValue={100} />
      </Grid>

      {/* Risk Distribution Chart */}
      <Grid size={{ xs: 12, lg: 4 }}>
        <RiskChart data={analytics.riskData} />
      </Grid>

      {/* Recent Updates Table */}
      <Grid size={{ xs: 12 }}>
        <RecentTable title="Recent Updates" data={analytics.recentUsers} columns={tableColumns} />
      </Grid>
    </Grid>
  );
}
