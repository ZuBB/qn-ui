import { AxiosError } from 'axios';
import { BeError } from './interfaces'

const DEFAULT_MESSAGE = 'An error occured. Please try later.';

export const getMessageFromBeResonse = (error: unknown): string => {
  return (error as AxiosError<BeError>).response
    ? (error as AxiosError<BeError>).response!.data.message
    : DEFAULT_MESSAGE;
};