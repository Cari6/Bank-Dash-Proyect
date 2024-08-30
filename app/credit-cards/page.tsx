"use client";
import React from "react";

import {
  Cards,
  GridContainer,
  Item1,
  Item2,
  Item3,
  Item4,
  Item5,
  PieChartContainer,
} from "./styles";
import { CardList, CreditCard, Typography } from "@/src/components";
import {
  pieChartCreditCardsData,
  pieChartCreditCardsOptions,
} from "@/src/utils/charts-data";
import Chart from "react-google-charts";

const CreditCardsPage = () => {
  return (
    <GridContainer>
      <Item1>
        <Typography
          variant="title1"
          style={{ alignSelf: "flex-start", marginBottom: 20, marginTop: 0 }}
        >
          My Cards
        </Typography>
        <Cards>
          <CreditCard
            variant="variant1"
            balance="$5,756"
            cardHolder="Eddy Cusuma"
            validThru="12/22"
            cardNumber="3778 **** **** 1234"
          />
          <CreditCard
            variant="variant2"
            balance="$5,756"
            cardHolder="Eddy Cusuma"
            validThru="12/22"
            cardNumber="3778 **** **** 1234"
          />
          <CreditCard
            variant="variant1"
            balance="$5,756"
            cardHolder="Eddy Cusuma"
            validThru="12/22"
            cardNumber="3778 **** **** 1234"
          />
        </Cards>
      </Item1>
      <Item2>
        <Typography
          variant="title1"
          style={{ alignSelf: "flex-start", marginBottom: 20, marginTop: 0 }}
        >
          Card Expense Statistics
        </Typography>
        <PieChartContainer>
          <Chart
            chartType="PieChart"
            data={pieChartCreditCardsData}
            options={pieChartCreditCardsOptions}
            width="100%"
            height="100%"
          />
        </PieChartContainer>
      </Item2>
      <Item3>
        <Typography
          variant="title1"
          style={{ alignSelf: "flex-start", marginBottom: 20, marginTop: 0 }}
        >
          Card List
        </Typography>
        <div style={{ height: 310 }}>
          <CardList />
        </div>
      </Item3>
      <Item4>
        <Typography
          variant="title1"
          style={{ alignSelf: "flex-start", marginBottom: 20, marginTop: 0 }}
        >
          Add New Card
        </Typography>
      </Item4>
      <Item5>
        <Typography
          variant="title1"
          style={{ alignSelf: "flex-start", marginBottom: 20, marginTop: 0 }}
        >
          Card Setting
        </Typography>
      </Item5>
    </GridContainer>
  );
};

export default CreditCardsPage;
