export type CharacterId = 'marx' | 'engels' | 'lenin' | 'luxemburg';
export interface Character {
  id: CharacterId;
  name: string;
  image: string;
  skill: string;
  buff: {
    type: 'accuracy' | 'risk' | 'profit' | 'trend';
    value: number;
  };
  description: string;
}
export type TradeDirection = 'LONG' | 'SHORT';
export type NewsImpact = 'positive-strong' | 'positive' | 'neutral' | 'negative' | 'negative-strong';
export interface NewsItem {
  text: string;
  type: NewsImpact;
  impact: number;
}
export interface ChartData {
  date: string;
  price: number;
  open?: number;
  close?: number;
  high?: number;
  low?: number;
}
export interface MarketCondition {
  trend: 'up' | 'down' | 'sideways';
  volatility: 'low' | 'medium' | 'high';
  description: string;
}