import {IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Dashcard {
    icon: IconDefinition;
    backgroundColor: string;
    title: string;
    value?: Number;
}
