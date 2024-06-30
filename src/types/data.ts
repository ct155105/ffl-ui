export type RbData = {
    player: string;
    player_id: string;
    position: string;
    team_name: string;
    player_game_count: number;
    attempts: number;
    avoided_tackles: number;
    breakaway_attempts: number;
    breakaway_percent: number;
    breakaway_yards: number;
    declined_penalties: number;
    designed_yards: number;
    drops: number;
    elu_recv_mtf: number;
    elu_rush_mtf: number;
    elu_yco: number;
    elusive_rating: number;
    explosive: number;
    first_downs: number;
    franchise_id: string;
    fumbles: number;
    gap_attempts: number;
    grades_hands_fumble: number;
    grades_offense: number;
    grades_offense_penalty: number;
    grades_pass: number;
    grades_pass_block: number;
    grades_pass_route: number;
    grades_run: number;
    grades_run_block: number;
    longest: number;
    penalties: number;
    rec_yards: number;
    receptions: number;
    routes: number;
    run_plays: number;
    scramble_yards: number;
    scrambles: number;
    targets: number;
    total_touches: number;
    touchdowns: number;
    yards: number;
    yards_after_contact: number;
    yco_attempt: number;
    ypa: number;
    yprr: number;
    zone_attempts: number;
    year: number;
  }

  export type WrData = {
    player: string;
    player_id: string;
    position: string;
    team_name: string;
    player_game_count: number;
    avg_depth_of_target: number;
    avoided_tackles: number;
    caught_percent: number;
    contested_catch_rate: number;
    contested_receptions: number;
    contested_targets: number;
    declined_penalties: number;
    drop_rate: number;
    drops: number;
    first_downs: number;
    franchise_id: string;
    fumbles: number;
    grades_hands_drop: number;
    grades_hands_fumble: number;
    grades_offense: number;
    grades_pass_block: number;
    grades_pass_route: number;
    inline_rate: number;
    inline_snaps: number;
    interceptions: number;
    longest: number;
    pass_block_rate: number;
    pass_blocks: number;
    pass_plays: number;
    penalties: number;
    receptions: number;
    route_rate: number;
    routes: number;
    slot_rate: number;
    slot_snaps: number;
    targeted_qb_rating: number;
    targets: number;
    touchdowns: number;
    wide_rate: number;
    wide_snaps: number;
    yards: number;
    yards_after_catch: number;
    yards_after_catch_per_reception: number;
    yards_per_reception: number;
    yprr: number;
};