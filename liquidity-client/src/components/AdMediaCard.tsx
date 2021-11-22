import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { FC, ReactElement } from 'react';

export interface Advert {
    alias: String
    color: string
    lastTimestamp: Date
    leaseFeeBaseMsat: string
    leaseFeeBasis: number
    fundingWeight: number
    channelFeeMaxBaseMsat: string
    channelFeeMaxProportional: number
    compactLease: string
}

interface Props {
    ad: Advert
}

const ImgMediaCard: FC<Props> = (props): ReactElement =>  {
    const { 
        alias,
        color,
        lastTimestamp,
        leaseFeeBaseMsat,
        leaseFeeBasis,
        fundingWeight,
        channelFeeMaxBaseMsat,
        channelFeeMaxProportional,
        compactLease, 
    } = props.ad
    const bgColor = `#${color}`

  return (
    <Card id={compactLease} style={{ maxWidth: 300}} variant='outlined'>
      <CardMedia
        style={{height: '100px', backgroundColor: bgColor}}
      /> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {alias.toUpperCase()}
        </Typography>
        <Typography variant="body2" color="primary">
          <strong>Last TimeStamp:</strong> {lastTimestamp}
          <br />
          <strong>LeaSe Fee Base Msat:</strong> {leaseFeeBaseMsat}
          <br />
          <strong>Lease Fee Basis:</strong> {leaseFeeBasis}
          <br />
          <strong>Funding Weight:</strong> {fundingWeight}
          <br />
          <strong>ChannelFeeMaxBaseMsat:</strong> {channelFeeMaxBaseMsat}
          <br />
          <strong>ChannelFeeMaxProportional:</strong> {channelFeeMaxProportional}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="default">Connect</Button>
        <Button size="small" variant="contained" color="primary">Fund</Button>
      </CardActions>
    </Card>
  );
}

export default ImgMediaCard;
