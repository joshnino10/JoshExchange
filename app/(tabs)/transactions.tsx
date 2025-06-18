import { transactions } from "@/components/Transactions/TransactionsDetails";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Transaction() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.page}>
        <Text style={styles.title}>All Transactions</Text>

        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={24} color="black" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search transactions"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <ScrollView>
          <View
            style={{
              marginTop: 15,
              marginBottom: Platform.OS === "ios" ? 30 : 50,
            }}
          >
            {transactions.map((transaction, Index) => (
              <TouchableOpacity style={styles.transactioncontainer} key={Index}>
                <View style={styles.details}>
                  <View
                    style={[
                      styles.iconBorder,
                      { borderColor: transaction.color },
                    ]}
                  >
                    <View>
                      <Feather
                        name={transaction.icon}
                        size={20}
                        color={transaction.color}
                      />
                    </View>
                  </View>

                  <View style={{ gap: 5 }}>
                    <Text style={[styles.type, { color: transaction.color }]}>
                      {transaction.title}
                    </Text>
                    <Text style={styles.date}>{transaction.date}</Text>
                  </View>
                </View>

                <View style={{ gap: 4 }}>
                  {transaction.TransactionType && (
                    <Text
                      style={[
                        styles.transactionType,
                        { color: transaction.color },
                      ]}
                    >
                      {transaction.TransactionType}
                    </Text>
                  )}

                  <Text style={[styles.amount, { color: transaction.color }]}>
                    {transaction.amount}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  page: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  title: {
    fontFamily: "Bold",
    fontSize: 25,
    letterSpacing: 0.5,
    textAlign: "center",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    marginVertical: 15,
    gap: 15,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === "ios" ? 10 : 5,
  },

  searchInput: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  transactioncontainer: {
    marginVertical: 5,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:Platform.OS === "ios"? 15:10,
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
  },

  details:{
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    justifyContent: "space-between"

  },

  iconBorder: {
    width: 32,
    height: 32,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  amount:{
    fontSize: 15,
    fontFamily: 'Bold'

  },
  type:{
    fontSize: 16,
    fontFamily: 'semiBold'
  },
  date:{
    fontFamily: 'Regular', 
    color: 'black',
    fontSize: 15

  },
  transactionType:{
    fontSize: 12,
    fontFamily: 'semiBold',


  },
});
