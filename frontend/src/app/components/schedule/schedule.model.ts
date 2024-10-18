export interface Schedule {
    id: number;
    idSubject: number | null;
    idTeacher: number | null;
    weekDay: string;
    startTime: string;
    endTime: string;
}