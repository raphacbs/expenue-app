/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    type RootParamList = RootStackParamList;
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  TabAccount: undefined;
  TabSettings: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type AccountFullResponseBody = {
  id: number;
  description: string;
  balanceDescription: string;
  totalRevenuesDescription: string;
  totalExpensesDescription: string;
  balance: number;
  totalRevenues: number;
  totalExpenses: number;
  selectedPeriod: Period;
  nextMonth: Period;
  previousMonth: Period;
  transactions: Array<TransactionBody>;
};

export type SimpleAccountResponseBody = {
  id: string;
  accountDescription: string;
  currentBalance: string;
  accountTypeDescription: string;
};

type Period = {
  description: string;
  startDate: string;
  endDate: string;
};

export type TransactionBody = {
  amountDescription: string;
  amount: number;
  description: string;
  dateValue: string;
  date: string;
  type: string;
  id: number;
};
