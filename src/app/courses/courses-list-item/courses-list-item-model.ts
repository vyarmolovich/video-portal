import { CoursesAuthor } from './courses-author-model';

export interface CoursesListItem {
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
    topRated: boolean;
    authors: CoursesAuthor[];
}
