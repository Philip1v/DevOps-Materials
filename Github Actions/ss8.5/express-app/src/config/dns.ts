import { setServers } from 'node:dns';

// This local network blocks public DNS (8.8.8.8, 1.1.1.1) on UDP+TCP:53.
// Only the ISP resolvers below answer, and they handle the SRV records that
// mongodb+srv:// requires. Force Node's resolver onto them.
//
// Imported first in server.ts so this runs before any module performs DNS.
setServers(['213.57.2.5', '213.57.22.5']);
