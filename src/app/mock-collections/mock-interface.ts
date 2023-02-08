export interface recordType {
  carrier?: string;
  dateActivated?: string;
  dateAdded?: string;
  dateModified?: string;
  hasDataUsage?: boolean;
  hasSmsUsage?: boolean;
  hasVoiceUsage?: boolean;
  iccid?: string;
  id?: string;
  identity?: string;
  imei?: string;
  imsi?: string;
  imsis?: any;
  inSession?: boolean;
  locAddress?: any;
  locLat?: number;
  locLng?: number;
  meid?: any;
  msisdn?: string;
  status?: string;
  tags?: any;
  terminalId?: string;
}
