import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { FC, ReactElement, useEffect, useState } from 'react';

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
  const [ textColor, setTextColor ] = useState('black');

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

    const getContrastForTextColor = () => {
      const r = parseInt(color.substr(0,2),16);
      const g = parseInt(color.substr(2,2),16);
      const b = parseInt(color.substr(4,2),16);
      const yiq = ((r*299)+(g*587)+(b*114))/1000;
      const tColor =  (yiq >= 128) ? 'black' : 'white';
      setTextColor(tColor);
    }

    useEffect(() => {
      getContrastForTextColor();
    })
  
    const mediaStyles =  {
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: bgColor,
          color: textColor
    }

  return (
    <Card id={compactLease} style={{ maxWidth: 300}} variant='outlined'>
      <CardMedia className='card-media'
        style={mediaStyles}
        >
          <Typography gutterBottom variant="h5" component="div">
            <strong>{alias.toUpperCase()}</strong>
          </Typography>
        </CardMedia>
      <CardContent>
        <Typography variant="body2" color="primary">
          <strong>Last TimeStamp:</strong> {lastTimestamp}
          <br />
          <br />
          <strong>Lease Fee Base Msat:</strong> {leaseFeeBaseMsat}
          <br />
          <strong>Lease Fee Basis:</strong> {leaseFeeBasis}
          <br />
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
