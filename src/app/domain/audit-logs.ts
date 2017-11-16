export interface AuditLogs {
    id: number;
    startDate: string;
    endDate: string;
    userName: string;
    serviceName: string;
    methodName: string;
    browserInfo: string;
}