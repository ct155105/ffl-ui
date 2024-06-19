'use server'

import { RbData, WrData } from '@/types/data';
import csv from 'csvtojson';

const getCsvFilePath = (position: string, year: number): string => {
  return `/Users/christeuschler/Documents/Projects/ffl-ui/src/data/csv/${position}-${year}.csv`;
}

export const getRbData = async (): Promise<RbData[]> => {
  console.log('getRbData Called');
  const csvData: any[]  = await csv().fromFile(getCsvFilePath('rb', 2023))
  const data: RbData[] = csvData.map((item: any) => {
    return {
      player: item.player,
      player_id: item.player_id,
      position: item.position,
      team_name: item.team_name,
      player_game_count: parseInt(item.player_game_count),
      attempts: parseInt(item.attempts),
      avoided_tackles: parseInt(item.avoided_tackles),
      breakaway_attempts: parseInt(item.breakaway_attempts),
      breakaway_percent: parseFloat(item.breakaway_percent),
      breakaway_yards: parseInt(item.breakaway_yards),
      declined_penalties: parseInt(item.declined_penalties),
      designed_yards: parseInt(item.designed_yards),
      drops: parseInt(item.drops),
      elu_recv_mtf: parseFloat(item.elu_recv_mtf),
      elu_rush_mtf: parseFloat(item.elu_rush_mtf),
      elu_yco: parseFloat(item.elu_yco),
      elusive_rating: parseFloat(item.elusive_rating),
      explosive: parseInt(item.explosive),
      first_downs: parseInt(item.first_downs),
      franchise_id: item.franchise_id,
      fumbles: parseInt(item.fumbles),
      gap_attempts: parseInt(item.gap_attempts),
      grades_hands_fumble: parseFloat(item.grades_hands_fumble),
      grades_offense: parseFloat(item.grades_offense),
      grades_offense_penalty: parseFloat(item.grades_offense_penalty),
      grades_pass: parseFloat(item.grades_pass),
      grades_pass_block: parseFloat(item.grades_pass_block),
      grades_pass_route: parseFloat(item.grades_pass_route),
      grades_run: parseFloat(item.grades_run),
      grades_run_block: parseFloat(item.grades_run_block),
      longest: parseInt(item.longest),
      penalties: parseInt(item.penalties),
      rec_yards: parseInt(item.rec_yards),
      receptions: parseInt(item.receptions),
      routes: parseInt(item.routes),
      run_plays: parseInt(item.run_plays),
      scramble_yards: parseInt(item.scramble_yards),
      scrambles: parseInt(item.scrambles),
      targets: parseInt(item.targets),
      total_touches: parseInt(item.total_touches),
      touchdowns: parseInt(item.touchdowns),
      yards: parseInt(item.yards),
      yards_after_contact: parseInt(item.yards_after_contact),
      yco_attempt: parseFloat(item.yco_attempt),
      ypa: parseFloat(item.ypa),
      yprr: parseFloat(item.yprr),
      zone_attempts: parseInt(item.zone_attempts)
    }
  });
  return data;
};

export const getWrData = async (): Promise<WrData[]> => {
  console.log('getWrData Called');
  const csvData: any[]  = await csv().fromFile(getCsvFilePath('wr', 2023))
  const data: WrData[] = csvData.map((item: any) => {
    return {
      player: item.player,
      player_id: item.player_id,
      position: item.position,
      team_name: item.team_name,
      player_game_count: parseInt(item.player_game_count),
      avg_depth_of_target: parseFloat(item.avg_depth_of_target),
      avoided_tackles: parseInt(item.avoided_tackles),
      caught_percent: parseFloat(item.caught_percent),
      contested_catch_rate: parseFloat(item.contested_catch_rate),
      contested_receptions: parseInt(item.contested_receptions),
      contested_targets: parseInt(item.contested_targets),
      declined_penalties: parseInt(item.declined_penalties),
      drop_rate: parseFloat(item.drop_rate),
      drops: parseInt(item.drops),
      first_downs: parseInt(item.first_downs),
      franchise_id: item.franchise_id,
      fumbles: parseInt(item.fumbles),
      grades_hands_drop: parseFloat(item.grades_hands_drop),
      grades_hands_fumble: parseFloat(item.grades_hands_fumble),
      grades_offense: parseFloat(item.grades_offense),
      grades_pass_block: parseFloat(item.grades_pass_block),
      grades_pass_route: parseFloat(item.grades_pass_route),
      inline_rate: parseFloat(item.inline_rate),
      inline_snaps: parseInt(item.inline_snaps),
      interceptions: parseInt(item.interceptions),
      longest: parseInt(item.longest),
      pass_block_rate: parseFloat(item.pass_block_rate),
      pass_blocks: parseInt(item.pass_blocks),
      pass_plays: parseInt(item.pass_plays),
      penalties: parseInt(item.penalties),
      receptions: parseInt(item.receptions),
      route_rate: parseFloat(item.route_rate),
      routes: parseInt(item.routes),
      slot_rate: parseFloat(item.slot_rate),
      slot_snaps: parseInt(item.slot_snaps),
      targeted_qb_rating: parseFloat(item.targeted_qb_rating),
      targets: parseInt(item.targets),
      touchdowns: parseInt(item.touchdowns),
      wide_rate: parseFloat(item.wide_rate),
      wide_snaps: parseInt(item.wide_snaps),
      yards: parseInt(item.yards),
      yards_after_catch: parseInt(item.yards_after_catch),
      yards_after_catch_per_reception: parseFloat(item.yards_after_catch_per_reception),
      yards_per_reception: parseFloat(item.yards_per_reception),
      yprr: parseFloat(item.yprr)
    }
  });
  return data;
}